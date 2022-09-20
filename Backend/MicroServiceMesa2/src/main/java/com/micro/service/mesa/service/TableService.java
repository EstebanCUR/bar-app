package com.micro.service.mesa.service;

import com.micro.service.mesa.dto.TableDtoRequest;
import com.micro.service.mesa.exceptions.AppInternalServerErrorException;
import com.micro.service.mesa.exceptions.AppNotFoundException;
import com.micro.service.mesa.model.Tables;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TableService {

    public ResponseEntity<Tables> EditStatus(Long id , TableDtoRequest dto) throws AppNotFoundException, AppInternalServerErrorException;

    public ResponseEntity<List<Tables>> AllTables() throws AppInternalServerErrorException;

    public ResponseEntity<Tables> TablesById(Long id) throws AppNotFoundException, AppInternalServerErrorException;

    Tables findById(Long id) throws AppNotFoundException;
}
