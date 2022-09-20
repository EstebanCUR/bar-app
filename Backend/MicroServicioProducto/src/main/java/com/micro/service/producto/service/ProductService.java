package com.micro.service.producto.service;

import com.micro.service.producto.exceptions.AppInternalServerErrorException;
import com.micro.service.producto.exceptions.AppNotFoundException;
import com.micro.service.producto.model.Products;
import org.springframework.http.ResponseEntity;
import com.micro.service.producto.dto.ProductsDtoRequest;

import java.util.List;

public interface ProductService {

    public ResponseEntity<List<Products>> AllProducts() throws AppInternalServerErrorException;

    public ResponseEntity<Products> EditStatus(Long id, ProductsDtoRequest dto) throws AppInternalServerErrorException, AppNotFoundException ;

    public ResponseEntity<Products> ProductsById(Long id) throws AppNotFoundException, AppInternalServerErrorException ;

    Products findById(Long id) throws AppNotFoundException;
}
