package com.micro.service.producto.controller;

import com.micro.service.producto.dto.ProductsDtoRequest;
import com.micro.service.producto.exceptions.AppInternalServerErrorException;
import com.micro.service.producto.exceptions.AppNotFoundException;
import com.micro.service.producto.model.Products;
import com.micro.service.producto.service.ProductService;
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
@RequestMapping("/api/Products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/AllProducts")
    public ResponseEntity<List<Products>> AllProducts() throws AppInternalServerErrorException {
        return productService.AllProducts();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Products> EditStatus( @PathVariable Long id ,@RequestBody ProductsDtoRequest dto) throws AppInternalServerErrorException, AppNotFoundException {
        return productService.EditStatus(id,dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Products> ProductsById(@PathVariable Long id) throws AppNotFoundException, AppInternalServerErrorException{
        return productService.ProductsById(id);
    }

}
