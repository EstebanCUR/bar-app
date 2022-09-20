package com.micro.service.producto.repository;


import com.micro.service.producto.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Products, Long> {


    @Query("SELECT p FROM Products p WHERE p.id = ?1")
    Optional<Products> findByIdOptional(Long id);
}
