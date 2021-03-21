import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
}
