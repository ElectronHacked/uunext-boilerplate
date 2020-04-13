import React from 'react';
// import SmileOutlined from '@ant-design/icons/SmileOutlined';

export const getIconByName = (IconName: string) => {
  console.log('getIconByName IconName :', IconName);
  import('@ant-design/icons').then(m => {});
  return (
    <span>
      dangerouslySetInnerHTML=
      {{
        __html: IconName,
      }}
    </span>
  );
};
