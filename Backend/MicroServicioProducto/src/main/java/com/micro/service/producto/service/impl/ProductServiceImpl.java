package com.micro.service.producto.service.impl;

import com.micro.service.producto.dto.ProductsDtoRequest;
import com.micro.service.producto.exceptions.AppInternalServerErrorException;
import com.micro.service.producto.exceptions.AppNotFoundException;
import com.micro.service.producto.model.Products;
import com.micro.service.producto.repository.ProductRepository;
import com.micro.service.producto.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public ResponseEntity<List<Products>> AllProducts() throws AppInternalServerErrorException {
        try{

            List<Products> products = productRepository.findAll();
            return ResponseEntity.status(HttpStatus.OK).body(products);

        }catch (Exception e){
            e.printStackTrace();
            throw new AppInternalServerErrorException("Error al buscar todos los productos");
        }
    }

    @Override
    public ResponseEntity<Products> EditStatus(Long id, ProductsDtoRequest dto) throws AppInternalServerErrorException, AppNotFoundException {
        try {

            findById(id);
            Products NotUpdated = new Products();
            NotUpdated.setId(id);
            NotUpdated.setProduct(dto.getProduct());
            NotUpdated.setCategory(dto.getCategory());
            NotUpdated.setPrice(dto.getPrice());
            NotUpdated.setStatus(dto.getStatus());

            Products Updated = productRepository.save(NotUpdated);

            return ResponseEntity.status(HttpStatus.OK).body(Updated);
        }
        catch (AppNotFoundException e){
            e.printStackTrace();
            throw new AppNotFoundException(e.getMessage());
        }catch (Exception e){
            e.printStackTrace();
            throw new AppInternalServerErrorException("Error al actualizar el producto");
        }
    }

    @Override
    public ResponseEntity<Products> ProductsById(Long id) throws AppNotFoundException, AppInternalServerErrorException {
        try {
            Products enBd=findById(id);
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
    public Products findById(Long id) throws AppNotFoundException {
        return productRepository.findByIdOptional(id).orElseThrow(() -> new AppNotFoundException("No encontre el producto con id: " + id));
    }
}
