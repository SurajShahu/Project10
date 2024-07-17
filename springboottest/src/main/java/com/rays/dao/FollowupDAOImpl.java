package com.rays.dao;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.FollowupDTO;

@Repository
public class FollowupDAOImpl extends BaseDAOImpl<FollowupDTO> implements FollowupDAOInt {

    @Override
    protected List<Predicate> getWhereClause(FollowupDTO dto, CriteriaBuilder builder, Root<FollowupDTO> qRoot) {
        List<Predicate> whereCondition = new ArrayList<Predicate>();

        if (!isEmptyString(dto.getPatient())) {
            whereCondition.add(builder.like(qRoot.get("patient"), dto.getPatient() + "%"));
        }
        if (!isEmptyString(dto.getDoctor())) {
            whereCondition.add(builder.like(qRoot.get("doctor"), dto.getDoctor() + "%"));
        }
        if (isNotNull(dto.getVisitDate())) {
            Date searchDate = dto.getVisitDate();

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(searchDate);
            calendar.set(Calendar.HOUR_OF_DAY, 0);
            calendar.set(Calendar.MINUTE, 0);
            calendar.set(Calendar.SECOND, 0);
            Date startDate = calendar.getTime();

            calendar.set(Calendar.HOUR_OF_DAY, 23);
            calendar.set(Calendar.MINUTE, 59);
            calendar.set(Calendar.SECOND, 59);
            Date endDate = calendar.getTime();

            Predicate datePredicate = builder.between(qRoot.get("visitDate"), startDate, endDate);
            whereCondition.add(datePredicate);
        }
        if (dto.getFees() != null && dto.getFees() != 0) {
            whereCondition.add(builder.equal(qRoot.get("fees"), dto.getFees()));
        }
        if (!isZeroNumber(dto.getId())) {
            whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
        }
        return whereCondition;
    }

    @Override
    public Class<FollowupDTO> getDTOClass() {
        return FollowupDTO.class;
    }
}
