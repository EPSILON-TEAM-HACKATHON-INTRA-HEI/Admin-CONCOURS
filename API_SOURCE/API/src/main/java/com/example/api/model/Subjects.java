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
@Table(name="subjects")
public class Subjects implements Serializable {
    @Id
    @Column(name="id_subject", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer IdSubject;
    @Column(name="name", nullable = false, length = 50)
    private String Name;
}
