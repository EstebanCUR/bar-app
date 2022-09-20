package com.micro.service.producto.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductsDtoRequest{

    @JsonProperty(value = "product",index = 1)
    private String product;

    @JsonProperty(value = "category",index = 2)
    private String category;

    @JsonProperty(value = "price",index = 3)
    private int price;

    @JsonProperty(value = "status",index = 4)
    private Boolean status;

}
