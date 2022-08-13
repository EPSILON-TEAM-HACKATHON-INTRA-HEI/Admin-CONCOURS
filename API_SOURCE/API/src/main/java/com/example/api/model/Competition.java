package model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name="competition")
public class Competition implements Serializable {
    @Id
    @Column(name="comptetition_id", nullable = false)
    private Integer CompetitionId;
    @Column(name="competition_grade")
    private Float CompetitionGrade;
}
