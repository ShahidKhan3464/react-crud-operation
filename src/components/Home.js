import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import { MdDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'

const Home = ({ data, setData }) => {
    const navigate = useNavigate()
    const iconStyle = { fontSize: '1.3rem', cursor: 'pointer' }

    const handleCreate = () => {
        navigate("/create")
    }

    const handleDelete = (id) => {
        const deletedUser = data.filter(user => user.id !== id)
        setData(deletedUser)
    }

    const handleEdit = (user) => {
        navigate("/create", { state: { user } })
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Button variant='success' onClick={handleCreate}>Create New</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Designation</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0
                            ? <tr>
                                <td
                                    colSpan='5'
                                    style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}
                                >
                                    No User Available !!!
                                </td>
                            </tr>
                            : data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <MdDelete style={iconStyle} onClick={() => handleDelete(user.id)} />
                                        <BiEdit style={iconStyle} onClick={() => handleEdit(user)} />
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
        </>
    );
}

export default Home;