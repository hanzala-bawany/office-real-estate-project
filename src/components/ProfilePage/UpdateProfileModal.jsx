import React, { useState } from 'react';
import { Modal, Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

const UpdateProfileModal = ({ visible, onClose, loginUserData }) => {

    const [form] = Form.useForm();
    const [previewImage, setPreviewImage] = useState(loginUserData?.avatar || null);
    const [imgFile, setImgFile] = useState(null);

    // Handle form submission
    const handleFinish = (values) => {

        const formData = {
            ...values,
            profileImage: imgFile || null,
        };

        console.log(formData, " ....... formData");

        const fd = new FormData();
        fd.append('username', values.username);
        fd.append('email', values.email);
        if (imageFile) fd.append('profileImage', imageFile);

        handleReset();

    };

    // Reset form and states
    const handleReset = () => {
        form.resetFields();
        setImgFile(null)
        setPreviewImage(null);
        onClose();
    };

    // Handle upload change
    const handleUploadChange = ({ file }) => {

        if (file.status === 'removed') {
            setImgFile(null)
            setPreviewImage(null);
            return;
        }

        const img = file?.originFileObj;
        if (img) {
            setImgFile(img)
            const url = URL.createObjectURL(img);
            setPreviewImage(url);
        }

    };




    return (
        <Modal
            title="Update Profile"
            open={visible}
            onCancel={handleReset}
            footer={null}
            width={500}
            className="update-profile-modal"
        >
            <div className="p-4">

                {/* Profile Image Preview */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="Profile Preview"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-300">
                                <UserOutlined className="text-4xl text-gray-400" />
                            </div>
                        )}
                    </div>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    onFinishFailed={(errorInfo) => {
                        console.log('Validation Failed:', errorInfo);
                    }}
                    initialValues={{
                        username: loginUserData?.userName || '',
                        email: loginUserData?.email || '',
                    }}
                    className="space-y-4"
                >

                    {/* Username Input */}
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            { required: true, message: 'Please enter your username!' },
                            { min: 3, message: 'Username must be at least 3 characters!' },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="text-gray-400" />}
                            placeholder="Enter username"
                            size="large"
                            className="rounded-lg"
                        />
                    </Form.Item>

                    {/* Email Input */}
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Please enter your email!' },
                            { type: 'email', message: 'Please enter a valid email!' },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="text-gray-400" />}
                            placeholder="Enter email"
                            size="large"
                            className="rounded-lg"
                        />
                    </Form.Item>

                    {/* Upload Image */}
                    <Form.Item
                        label="Profile Image"
                        name="profileImage"
                    >

                        <Upload
                            maxCount={1}
                            onChange={handleUploadChange}
                        >
                            <Button icon={<UploadOutlined />} className="w-full">
                                Upload Image
                            </Button>
                        </Upload>
                        <div className="text-xs text-gray-400 mt-1">
                            Supported formats: JPG, PNG, GIF (Max 2MB)
                        </div>

                    </Form.Item>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-3 m-5  gap-2">
                        <Button onClick={handleReset} size="large">
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" size="large">
                            Update Profile
                        </Button>
                    </div>

                </Form>

            </div>
        </Modal>
    );
};

export default UpdateProfileModal;