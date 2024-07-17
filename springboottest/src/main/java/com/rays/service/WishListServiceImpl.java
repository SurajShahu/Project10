package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.WishListDAOInt;
import com.rays.dto.WishListDTO;

@Service
@Transactional
public class WishListServiceImpl extends BaseServiceImpl<WishListDTO, WishListDAOInt> implements WishListServiceInt{

	
}
