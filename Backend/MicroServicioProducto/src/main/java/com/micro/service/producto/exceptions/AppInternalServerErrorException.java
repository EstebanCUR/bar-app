package com.micro.service.producto.exceptions;

import org.springframework.http.HttpStatus;

public class AppInternalServerErrorException extends AppGlobalException {

    public AppInternalServerErrorException(String message) {
        super(HttpStatus.INTERNAL_SERVER_ERROR.value(), message);
    }


}