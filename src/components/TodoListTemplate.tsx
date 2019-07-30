import React from 'react'
import { any } from 'prop-types';
import './TodoListTemplate.css'

export class TodoListTemplate extends React.Component {
    // props = {
    //     form: any,
    //     children: String
    // }
    // state = {
    //     form: React.Component,
    //     children: React.Component
    // }

    render(){
        return (
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                <section className="form-wrapper">
                    {/* { this.props.form } */}
                </section>
                <section className="todos-wrapper">
                    { this.props.children }
                </section>
            </main>
        )
    }
}