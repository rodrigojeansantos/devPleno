import React from "react"
import Comments from './Comments'
import Comment from './Comment'
import { shallow } from 'enzyme'

describe('comments', () => {
    it('should render text', () => {
        const c = {
            a: {id: 'a', comment: 'Comment1'},
            b: {id: 'b', comment: 'Comment2'}
        }
        const wrapper = shallow(<Comments comments={c} />)
         // console.log(wrapper.find(Comment).length)
         expect(wrapper.find(Comment).length).toBe(2)
         expect(wrapper.find(Comment).get(0).props.c).toBe(c.a)
         expect(wrapper.find(Comment).get(1).props.c).toBe(c.b)

         expect(wrapper.find(Comment).get(0).key).toBe(c.a.id)
         expect(wrapper.find(Comment).get(1).key).toBe('b')
    })

    it('should work with no Comments', () => {
        const c = {}
        const wrapper = shallow(<Comments comments={c} />)
        expect(wrapper.find(Comment).length).toBe(0)
        // console.log(wrapper.html())
    })
})
