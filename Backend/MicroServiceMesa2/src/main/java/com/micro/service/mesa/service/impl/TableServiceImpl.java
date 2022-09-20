package com.micro.service.mesa.service.impl;

import com.micro.service.mesa.dto.TableDtoRequest;
import com.micro.service.mesa.exceptions.AppInternalServerErrorException;
import com.micro.service.mesa.exceptions.AppNotFoundException;
import com.micro.service.mesa.model.Tables;
import com.micro.service.mesa.repository.TableRepository;
import com.micro.service.mesa.service.TableService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableServiceImpl implements TableService {

    private final TableRepository tableRepository;

    public TableServiceImpl(TableRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    @Override
    public ResponseEntity<Tables> EditStatus(Long id , TableDtoRequest dto) throws AppInternalServerErrorException, AppNotFoundException {
        try {

            findById(id);
            Tables NotUpdated = new Tables();
            NotUpdated.setId(id);
            NotUpdated.setNumber_table(dto.getNumber_table());
            NotUpdated.setNumber_client(dto.getNumber_client());
            NotUpdated.setStatus(dto.getStatus());

            Tables Updated = tableRepository.save(NotUpdated);

            return ResponseEntity.status(HttpStatus.OK).body(Updated);
        }
        catch (AppNotFoundException e){
            e.printStackTrace();
            throw new AppNotFoundException(e.getMessage());
        }catch (Exception e){
            e.printStackTrace();
            throw new AppInternalServerErrorException("Error al actualizar la mesa");
        }
    }

    @Override
    public ResponseEntity<List<Tables>> AllTables() throws AppInternalServerErrorException {
        try{

            List<Tables> tables = tableRepository.findAll();
            return ResponseEntity.status(HttpStatus.OK).body(tables);

        }catch (Exception e){
            e.printStackTrace();
            throw new AppInternalServerErrorException("Error al buscar todas las mesas");
        }

    }

    public ResponseEntity<Tables> TablesById(Long id) throws AppNotFoundException, AppInternalServerErrorException{
        try {

            Tables enBd=findById(id);
            return ResponseEntity.status(HttpStatus.OK).body(enBd);

        }
        catch (AppNotFoundException e){
            e.printStackTrace();
            throw new AppInternalServerErrorException(e.getMessage());
        }
        catch (Exception e){
            e.printStackTrace();
            throw new AppInternalServerErrorException("Error al Buscar la mesa por ID");
        }
    }

    @Override
    public Tables findById(Long id) throws AppNotFoundException {
        return tableRepository.findByIdOptional(id).orElseThrow(() -> new AppNotFoundException("No encontre la mesa con id: " + id));
    }
}
