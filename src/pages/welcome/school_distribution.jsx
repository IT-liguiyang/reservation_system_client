/* eslint-disable no-undef */
import React, { useState,useEffect } from 'react';
import { Column, Pie, Line } from '@ant-design/plots';
import { Card, List } from 'antd';
import { useHistory} from 'react-router-dom';

import { reqSystemAnnouncements } from '../../api';

import { SCHOOL_LIST } from '../../utils/school-list';
import LinkButton from '../../components/link-button';

import './index.css';

const SchoolDistribution = ()=> {

  // 获取history对象
  const history = useHistory();

  const [announcementList, setAnnouncementList] = useState([]);

  // 柱状图和饼图数据
  const data1 = [
    {type:'市直属',value:SCHOOL_LIST[0].children.length},
    {type:'观山湖区',value:SCHOOL_LIST[1].children.length},
    {type:'云岩区',value:SCHOOL_LIST[3].children.length},
    {type:'南明区',value:SCHOOL_LIST[2].children.length},
    {type:'乌当区',value:SCHOOL_LIST[5].children.length},
    {type:'白云区',value:SCHOOL_LIST[6].children.length},
    {type:'花溪区',value:SCHOOL_LIST[4].children.length},
    {type:'清镇市',value:SCHOOL_LIST[7].children.length},
    {type:'开阳县',value:SCHOOL_LIST[9].children.length},
    {type:'修文县',value:SCHOOL_LIST[8].children.length},
    {type:'息烽县',value:SCHOOL_LIST[10].children.length},
    {type:'贵安新区',value:SCHOOL_LIST[11].children.length}
  ];

  // 折线图数据
  const data2 = [
    {time:'-15',value:350},
    {time:'-14',value:323},
    {time:'-13',value:410},
    {time:'-12',value:642},
    {time:'-11',value:710},
    {time:'-10',value:275},
    {time:'-9',value:264},
    {time:'-8',value:311},
    {time:'-7',value:245},
    {time:'-6',value:366},
    {time:'-5',value:598},
    {time:'-4',value:722},
    {time:'-3',value:256},
    {time:'-2',value:278},
    {time:'-1',value:331},
    {time:'今日',value:324}
  ];

  const config_column = {
    data:data1,
    xField: 'type',
    yField: 'value',
    seriesField:'',
    legend:false,
    style:{width:800,height:170},
    label:{
      position:'middle',
      style:{
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis:{
      label: {
        autoHide:true,
        autoRotate:false
      }
    }
  };

  const config_pie = {
    data:data1,
    appendPadding:10,
    angleField:'value',
    colorField:'type',
    radius:0.9,
    width:400,
    height:500,
    style:{width:250,height:170},
    label:{
      type:'inner',
      offset:'-30%',
      content:({percent})=>`${(percent * 100).toFixed(0)}%`,
      style:{
        fontSize:14,
        textAlign:'center'
      }
    },
    interactions:[
      {type:'element-active'}
    ]
  };

  const config_line = {
    data:data2,
    padding:'auto',
    xField: 'time',
    yField: 'value',
    style:{width:800,height:170},
  };

  // 获取系统公告
  const getSystemAnnouncements = async () => {
    const result= await reqSystemAnnouncements();
    // 只显示4条
    setAnnouncementList(result.data.slice(0, 4));
  };

  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
  useEffect(() => {
    getSystemAnnouncements();
  },[]);

  return (
    <div>
      <div className='charts'>
        {/* 柱状图 */}
        <Card
          title="贵阳市各区域对外学校数量总览"
          headStyle={{color: 'rgba(0,0,0,.45)',fontSize:14,height:20}}
          style={{width:850}}
          bordered
          hoverable
        >
          <Column {...config_column} />
        </Card>
        {/* 饼状图 */}
        <Card
          title="贵阳市各区域对外学校数量占比"
          headStyle={{color: 'rgba(0,0,0,.45)',fontSize:14,height:20}}
          style={{width:350}}
          bordered
          hoverable
        >
          <Pie {...config_pie} />
        </Card>
      </div>
      <div className='charts'>
        {/* 折线图 */}
        <Card
          title="过去15天系统的访问量总览"
          headStyle={{color: 'rgba(0,0,0,.45)',fontSize:14,height:20}}
          style={{width:850,height:235}}
          bordered
          hoverable
        >
          <Line {...config_line} />
        </Card>
        {/* 系统公告 */}
        <Card
          title="系统公告"
          headStyle={{color: 'rgba(0,0,0,.45)',fontSize:14,height:20}}
          style={{width:350,height:235}}
          bordered
          hoverable
        >
          <List
            itemLayout="horizontal"
            dataSource={announcementList}
            size='small'
            style={{}}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={<LinkButton style={{color:'#999999'}} onClick={() => history.push('/announcement')} >{index+1}、{item.pub_theme}</LinkButton>}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
    
  );
};

export default SchoolDistribution;