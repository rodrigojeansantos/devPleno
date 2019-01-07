import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import Comments from './Comments'
import NewComment from './NewComment'
import { EventEmitter } from 'events'

describe('<App />', () => {
  
  it('renders without crashing', () => {
    const database = { ref: jest.fn() }
    database.ref.mockReturnValue({
      on: jest.fn()
    })
    const wrapper = shallow(<App database={database} />)
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  });

  it('adds a new comment', () => {
    const _j = jest.fn

    const database = { ref: _j() }
    const child = _j()
    const update = _j()

    database.ref.mockReturnValue({
      on: _j(),
      child,
      update
    })
    const push = _j()
    child.mockReturnValue({ push })
    push.mockReturnValue({ key: '1' })

    const wrapper = shallow(<App database={database} />)
    wrapper.instance().sendComment('new comment')
    // console.log(child.mock.calls)
    expect(child).toBeCalledWith('comments')
    expect(update).toBeCalledWith({ 'comments/1': { comment: 'new comment'} })
    // console.log(update.mock.calls)
  });

  it('renders comments from firebase', () => {
    const database = { ref: jest.fn() }

    const eventEmmiter = new EventEmitter()

    database.ref.mockReturnValue(eventEmmiter)
    const wrapper = shallow(<App database={database} />)

    const comments = { a: { comment: 'comment 1 '}, b: { comment: 'comment 2 '}}
    const val = jest.fn()
    val.mockReturnValue(comments)
    eventEmmiter.emit('value', { val: jest.fn() })

    wrapper.update()

    expect(wrapper.state().isLoading).toBeFalsy()    
  });

})

