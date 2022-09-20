package com.micro.service.mesa.model;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity
@Table(name = "tables")
@Data
public class Tables{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "number_table")
    private int number_table;

    @Column(name = "number_client")
    private int number_client;

    @Column(name = "status")
    private Boolean status;
}
