package controller;

import model.Students;
import org.springframework.web.bind.annotation.RequestMapping;
//import service.StudentsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class Results {
   // private StudentsService service;
    @GetMapping("/results")
    //public List<Students> getResults(@RequestParam int page, @RequestParam("page_size") int pageSize){
      //  return service.getAllResults(page, pageSize);
    //}
    public String hi(){return "huiii";}
}
