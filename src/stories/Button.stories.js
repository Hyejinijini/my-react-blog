import Button from '@common/components/Button.jsx'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Default = {
  args: {
    type: 'button',
    onClick: () => alert('Button Default clicked!'),
    className: 'px-4 py-2',
    children: 'Button Text'
  }
}

export const White = {
  args: {
    type: 'Button',
    onClick: () => alert('Button White clicked!'),
    className: 'bg-white border-gray-500 px-4 py-2 text-black hover:bg-gray-100',
    children: 'Button White'
  }
}

export const Gray = {
  args: {
    type: 'button',
    onClick: () => alert('Button Gray clicked!'),
    className: 'bg-gray-500 border-gray-500 px-4 py-2 hover:bg-gray-600',
    children: 'Button Gray'
  }
}

export const Blue = {
  args: {
    type: 'Button',
    onClick: () => alert('Button Blue clicked!'),
    className: 'bg-blue-400 border-blue-400 px-4 py-2 hover:bg-blue-500',
    children: 'Button Blue'
  }
}

export const Red = {
  args: {
    type: 'Button',
    onClick: () => alert('Button Red clicked!'),
    className: 'bg-red-500 border-red-500 px-4 py-2 hover:bg-red-600',
    children: 'Button Red'
  }
}
