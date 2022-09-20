package com.micro.service.mesa.controller;

import com.micro.service.mesa.dto.TableDtoRequest;
import com.micro.service.mesa.exceptions.AppInternalServerErrorException;
import com.micro.service.mesa.exceptions.AppNotFoundException;
import com.micro.service.mesa.model.Tables;
import com.micro.service.mesa.service.TableService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/api/Tables")
@CrossOrigin("*")
public class TableController {

    private final TableService tableService;

    public TableController(TableService tableService) {
        this.tableService = tableService;
    }
    @GetMapping("/AllTables")
    public ResponseEntity<List<Tables>> AllTables() throws AppInternalServerErrorException {
    return tableService.AllTables();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tables> EditStatus( @PathVariable Long id ,@RequestBody TableDtoRequest dto) throws AppInternalServerErrorException, AppNotFoundException {
        return tableService.EditStatus(id,dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tables> TablesById(@PathVariable Long id) throws AppNotFoundException, AppInternalServerErrorException{
        return tableService.TablesById(id);
    }
}
