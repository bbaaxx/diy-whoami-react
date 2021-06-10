import * as React from 'react';
import { useState } from 'react';
import { DatePicker, message } from 'antd';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export function ResumeView() {
  const [date, setDate] = useState({ format: x => x });
  const handleChange = value => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`,
    );
    setDate(value);
  };
  return (
    <>
      <Typography>
        <Title>Ribbon</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae
          maiores magnam quidem consequuntur sapiente earum nam similique,
          <Text strong>
            illo fugit voluptates, vel vero numquam perferendis, officia aperiam
            cupiditate iste.
          </Text>
          Molestiae.
        </Paragraph>
      </Typography>
      <Divider />
      <div>Ribbon</div>
      <div>Heading</div>
      <div>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
          </div>
        </div>
        <div>Left part</div>
        <div>Right part</div>
      </div>
      <div>Footer</div>
    </>
  );
}
