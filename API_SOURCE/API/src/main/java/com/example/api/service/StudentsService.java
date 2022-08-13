package service;

import model.Students;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class StudentsService {
    public static Students UpdateStudent(Students current_student, Students new_student){
        if(new_student.getName() !=null){
            current_student.setName(new_student.getName());
        }
        if(new_student.getFirstName() !=null){
            current_student.setFirstName(new_student.getFirstName());
        }

        return new_student;
    }


   /**public List<Students> getAllResults(int page, int pageSize){
       Pageable pageable = (Pageable) PageRequest.of(page-1, pageSize);
       return repo.findAll((Sort) pageable);
    }*/
}
