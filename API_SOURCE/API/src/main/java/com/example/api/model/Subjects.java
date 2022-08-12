package com.example.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name="subjects")
public class Subjects {
    @Id
    @Column(name="id_subject", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdSubject;
    @Column(name="name", nullable = false)
    private String Name;

    @ManyToOne
    @JoinColumn(name = "bac_id_note_bac")
    private Bac bac;

}
