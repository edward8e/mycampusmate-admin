import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import InputNumber from '../../components/uielements/InputNumber';
import Select, { SelectOption } from '../../components/uielements/select';
import DatePicker from '../../components/uielements/datePicker';
import AutoComplete from '../../components/uielements/autocomplete';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import Button, { ButtonGroup } from '../../components/uielements/button';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import { rtl } from '../../settings/withDirection';

export default class ContactUs extends Component {
  render() {
    const rowStyle = {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap'
      };
      const colStyle = {
        marginBottom: '16px'
      };
      const margin = {
        margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
      };
      const gutter = 16;
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box
              title={'Contact Us'}
              subtitle={'How can we help you?'}
            >
              <ContentHolder>
                <Input size="large"
                  placeholder="Name"
                  style={{ marginBottom: '15px' }} />
                <Input size="large"
                  placeholder="Email"
                  style={{ marginBottom: '15px' }} />
                <Input size="large"
                  placeholder="Phone Number"
                  style={{ marginBottom: '15px' }} />
                <Input size="large"
                  placeholder="Club"
                  style={{ marginBottom: '15px' }} />
                <Input size="large"
                  placeholder="Subject"
                  style={{ marginBottom: '15px' }} />
                <Textarea placeholder="Message" rows={6} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Button type="primary" style={margin}>
                  Send
                </Button>
          
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
