package com.micro.service.mesa.exceptions;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class AppGlobalException extends Exception {

    private final int responseCode;

    private final List<ErrorDto> errorsList = new ArrayList<>();

    public AppGlobalException(int responseCode, String message) {
        super(message);
        this.responseCode = responseCode;
    }
}