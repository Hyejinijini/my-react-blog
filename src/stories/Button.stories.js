import Button from '@stories/Button.jsx'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, // 배경색을 선택할 수 있도록 설정
    primary: { control: 'boolean' }, // primary 속성을 토글할 수 있도록 설정
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'] // size를 선택할 수 있도록 설정
    },
    padding: { control: 'text' }, // padding을 입력할 수 있도록 설정
    margin: { control: 'text' }, // margin을 입력할 수 있도록 설정
    width: { control: 'text' }, // width를 입력할 수 있도록 설정
    height: { control: 'text' }, // height를 입력할 수 있도록 설정
    onClick: { action: 'clicked' }
  }
}

export default meta

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    size: 'medium', // 기본적으로 medium 크기로 설정
    padding: '8px 16px', // 기본 padding 설정
    margin: '0', // 기본 margin 설정
    width: 'auto', // 기본 width 설정
    height: 'auto' // 기본 height 설정
  }
}

export const Small = {
  args: {
    size: 'small', // small 크기 설정
    label: 'Button',
    padding: '6px 12px', // small 크기에 맞춘 padding 설정
    margin: '0', // 기본 margin 설정
    width: 'auto', // 기본 width 설정
    height: 'auto' // 기본 height 설정
  }
}

export const Medium = {
  args: {
    primary: false, // primary를 false로 설정하여 Secondary 스타일 적용
    label: 'Button',
    size: 'medium',
    padding: '8px 16px', // 기본 padding 설정
    margin: '0', // 기본 margin 설정
    width: 'auto', // 기본 width 설정
    height: 'auto' // 기본 height 설정
  }
}

export const Large = {
  args: {
    size: 'large', // large 크기 설정
    label: 'Button',
    padding: '10px 20px', // large 크기에 맞춘 padding 설정
    margin: '0', // 기본 margin 설정
    width: 'auto', // 기본 width 설정
    height: 'auto' // 기본 height 설정
  }
}
