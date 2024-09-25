import { Button, Table, TableColumnsType } from 'antd'
import React from 'react'
import toast from 'react-hot-toast'
import { TUser } from '../../types/user.type'
import { useGetusersQuery, useUpdateUserMutation } from '../../redux/features/user/user.api'
import '../style.css'
import Loading from '../../components/Loading'
function UserManagement() {
    const { data: userDataData, isLoading } = useGetusersQuery(undefined)
    const [updateUser] = useUpdateUserMutation()
    const tableData = userDataData?.data?.map(({ _id, name, email, phone, role, address, status }: TUser) => ({
        key: _id,
        name, email, phone, role, address, status
    }))
    console.log(tableData)
    if (isLoading) {
        return <Loading />
    }

    const handleStatus = async (id: string, status: string) => {
        console.log(status, "status")
        const updateData = {
            id,
            status
        }
        try {
            const res = await updateUser(updateData)
            console.log(res)
            toast.success('booking updated successfull')
        } catch (error) {
            toast.error('something went wrong')
        }
    }

    const handleRole = async (id: string, role: string) => {
        const updateData = {
            id,
            role
        }
        try {
            const res = await updateUser(updateData)
            console.log(res)
            toast.success('booking updated successfull')
        } catch (error) {
            toast.error('something went wrong')
        }
    }

    const columns: TableColumnsType<TUser> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },

        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            render: (item) => {
                return (
                    <div className='flex gap-2'>

                        <Button onClick={() => handleStatus(item.key, 'blocked')}>Block User</Button>
                        <Button onClick={() => handleStatus(item.key, 'active')}>Active User</Button>
                        <Button onClick={() => handleRole(item.key, 'admin')}>make Admin</Button>
                    </div>
                )
            }
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                style={{ width: '100%' }}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    )
}

export default UserManagement