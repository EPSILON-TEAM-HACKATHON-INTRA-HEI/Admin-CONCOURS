package model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "student")
public class Students implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Student_Id;

    @Column(name="name",nullable = false, length = 70)
    private String Name;
    @Column(name="first_name",nullable = false, length = 80)
    private String FirstName;
}
