import { useState } from "react";
import { Modal, Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UpdateProfileModal = ({ open, onCancel, onSubmit, initialValues }) => {

    const [form] = Form.useForm();
    const [preview, setPreview] = useState(initialValues?.image || "");

    const handleImageChange = ({ file }) => {
        if (!file) return;

        const originFile = file.originFileObj;

        if (originFile) {
            setPreview(URL.createObjectURL(originFile));
        }
    };

    const handleFinish = (values) => {
        console.log(values);

        const image = values.profileImage?.[0]?.originFileObj;

        console.log({
            username: values.username,
            email: values.email,
            image,
        });

        onSubmit({
            username: values.username,
            email: values.email,
            image,
        });
    };

    return (
        <Modal
            open={open}
            title="Update Profile"
            footer={null}
            onCancel={onCancel}
            centered
            destroyOnClose
        >

            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    username: initialValues?.username,
                    email: initialValues?.email,
                }}
                onFinish={handleFinish}
            >

                {/* Image Preview */}
                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                No Image
                            </div>
                        )}
                    </div>
                </div>

                {/* File Input */}
                <Form.Item
                    label="Profile Image"
                    name="profileImage"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e?.fileList}
                >
                    <Upload
                        beforeUpload={() => false} // file upload nahi karega
                        maxCount={1}
                        listType="text"
                        accept="image/*"
                        onChange={handleImageChange}
                    >
                        <Button icon={<UploadOutlined />}>
                            Select Image
                        </Button>
                    </Upload>
                </Form.Item>

                {/* Username */}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please enter username",
                        },
                    ]}
                >
                    <Input placeholder="Enter username" />
                </Form.Item>

                {/* Email */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please enter email",
                        },
                        {
                            type: "email",
                            message: "Enter valid email",
                        },
                    ]}
                >
                    <Input placeholder="Enter email" />
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    className="w-full"
                >
                    Update Profile
                </Button>

            </Form>
        </Modal>
    );
};

export default UpdateProfileModal;