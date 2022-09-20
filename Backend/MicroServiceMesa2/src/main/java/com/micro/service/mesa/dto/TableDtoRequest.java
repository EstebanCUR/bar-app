package com.micro.service.mesa.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TableDtoRequest{

    @JsonProperty(value = "number_table",index = 1)
    private int number_table;

    @JsonProperty(value = "number_client",index = 2)
    private int number_client;

    @JsonProperty(value = "status",index = 3)
    private Boolean status;
}



