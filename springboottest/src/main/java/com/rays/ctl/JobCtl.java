package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.JobDTO;
import com.rays.form.JobForm;
import com.rays.service.JobServiceInt;

@RestController
@RequestMapping(value = "Job")
public class JobCtl extends BaseCtl<JobForm, JobDTO, JobServiceInt> {

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload Rahul");
        ORSResponse res = new ORSResponse(true);
        JobDTO dto = new JobDTO();
        List list = new ArrayList<>();
	    list.add("High");
	    list.add("Middle");
	    list.add("Low");
        //List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("joblist", list);
        return res;
    }
    
}