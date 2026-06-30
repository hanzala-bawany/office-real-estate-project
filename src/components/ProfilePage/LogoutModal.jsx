import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {api} from '../../utills/api';

const LogoutModal = ({isModalVisible , setIsModalVisible}) => {


  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const logoutHandler = async () => {

    try{ 

      const res = await api.post('/api/auth/logout');
      // console.log(res, "........ logout response");
      localStorage.removeItem('user');
      toast.success(res?.data?.message);
      navigate('/signin');
    }
    catch(err){
      console.error('Error during logout:', err);
    }
    finally{
      setIsModalVisible(false);
    }
    
  };

  return (
    <>

      <Modal
        title="Confirm Logout"
        open={isModalVisible}
        onOk={logoutHandler}
        onCancel={handleCancel}
        okText="Yes, Logout"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
        centered
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
};

export default LogoutModal;