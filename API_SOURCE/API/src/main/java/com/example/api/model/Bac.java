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
public class Bac implements Serializable {
    @Id
    @Column(name="id_bac")
    private Integer BacId;
    @Column(name="grade_bac")
    private Float BacGrade;
}
