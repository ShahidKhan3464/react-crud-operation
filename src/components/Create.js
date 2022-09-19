import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Create = ({ data, setData }) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [username, setUsername] = useState('')
    const [designation, setDesignation] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (state) {
            const updateUser = data.find(user => user.id === state.user.id)
            updateUser.id = state.user.id
            updateUser.username = username
            updateUser.designation = designation
            updateUser.location = location
            navigate('/')
            return
        }
        const id = data.length + 1
        const newData = { id, username, designation, location }
        setData([...data, newData])
        navigate('/')
    }

    useEffect(() => {
        if (state) {
            setUsername(state.user.username)
            setDesignation(state.user.designation)
            setLocation(state.user.location)
        }
    }, [state])


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                    type="text"
                    value={designation}
                    placeholder="Enter designation"
                    onChange={(e) => setDesignation(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    value={location}
                    placeholder="Enter location"
                    onChange={(e) => setLocation(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ marginRight: '1rem' }}>{state ? 'Update' : 'Add'}</Button>
        </Form>
    );
}

export default Create;