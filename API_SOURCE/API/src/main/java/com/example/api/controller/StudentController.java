package controller;

import lombok.AllArgsConstructor;
import model.Students;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import repository.StudentsRepository;

@RestController
@AllArgsConstructor
public class StudentController {
   // @Autowired
    private final StudentsRepository studentsRepository;

    @PostMapping(value = "")
    public Students createCandidat(@RequestBody Students student) {
        studentsRepository.save(student);
        return student;
    }
}
