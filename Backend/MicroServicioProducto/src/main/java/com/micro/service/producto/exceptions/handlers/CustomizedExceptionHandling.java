package com.micro.service.producto.exceptions.handlers;

import com.micro.service.producto.exceptions.AppInternalServerErrorException;
import com.micro.service.producto.exceptions.AppNotFoundException;
import com.micro.service.producto.exceptions.ExceptionResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
@Log4j2
public class CustomizedExceptionHandling extends ResponseEntityExceptionHandler {

    @ExceptionHandler(HttpClientErrorException.class)
    protected ResponseEntity<ExceptionResponse> handleNumberFormatException(HttpClientErrorException ex) {
        log.error("[Error] - character no encontrado");
        ExceptionResponse response = new ExceptionResponse();
        response.setTimestamp(LocalDateTime.now());
        response.setErrorMessage("Este character no existe");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    protected ResponseEntity<ExceptionResponse> handleNumberFormatException(Exception ex) {
        log.error("[Error] - el id del Character en la url no es un numero entero");
        ExceptionResponse response = new ExceptionResponse();
        response.setTimestamp(LocalDateTime.now());
        response.setErrorMessage("el id debe ser un número entero");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AppInternalServerErrorException.class)
    protected ResponseEntity<ExceptionResponse> handleInternalServerErrorException(AppInternalServerErrorException ex) {
        log.error("[Error] - Internal Server Error handler..."+ex.getMessage());
        ExceptionResponse response = new ExceptionResponse();
        response.setTimestamp(LocalDateTime.now());
        response.setErrorMessage(ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(AppNotFoundException.class)
    protected ResponseEntity<ExceptionResponse> handleNotFoundException(AppNotFoundException ex) {
        log.error("[Error] - Internal Server Error handler..."+ex.getMessage());
        ExceptionResponse response = new ExceptionResponse();
        response.setTimestamp(LocalDateTime.now());
        response.setErrorMessage(ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}
