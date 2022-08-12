package com.example.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name="competition")
public class Competition {
    @Id
    @Column(name="comptetition_id", nullable = false)
    private int CompetitionId;
    @Column(name="competition_grade")
    private String CompetitionGrade;
}
