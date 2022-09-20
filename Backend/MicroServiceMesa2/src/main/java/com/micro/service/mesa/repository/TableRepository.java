package com.micro.service.mesa.repository;

import com.micro.service.mesa.model.Tables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


//Nos permite conectarnos a la BD sin necesidad de SQL
public interface TableRepository extends JpaRepository<Tables, Long> {

    @Query("SELECT t FROM Tables t WHERE t.id = ?1")
    Optional<Tables> findByIdOptional(Long id);
}
