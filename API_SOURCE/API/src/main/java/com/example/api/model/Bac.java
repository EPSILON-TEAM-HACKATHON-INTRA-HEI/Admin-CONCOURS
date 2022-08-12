package com.example.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name="bac")
public class Bac {
    @Id
    @Column(name="id_note_bac")
    private int BacId;
    @Column(name="grate_bac")
    private String BacGrade;

    @ManyToMany(cascade = {CascadeType.ALL})
    private Set<Subjects> Subject_name;
}
