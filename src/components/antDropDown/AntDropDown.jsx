import { useState } from 'react';
import s from "./antDropDown.module.scss"
import { Select, Space } from 'antd';


const AntDropDown = ({inputSelect , name}) => {

    const cityData = {
        Zhejiang: inputSelect,
        Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
    };
    const provinceData = ['Zhejiang', 'Jiangsu'];

    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
    
    const handleProvinceChange = value => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };
    const onSecondCityChange = value => {
        setSecondCity(value);
    };


    return (
        <Space wrap>
           
            <Select
                style={{ padding : "0px" }}
                className={name == "property" ? s.property : s.type }
                value={secondCity}
                onChange={onSecondCityChange}
                options={cities.map(city => ({ label: city, value: city }))}
                popupMatchSelectWidth={false}
            />
        </Space>
    );
};
export default AntDropDown;