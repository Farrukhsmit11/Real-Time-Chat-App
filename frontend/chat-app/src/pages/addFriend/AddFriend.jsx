import "./AddFriend.css"
import PageHeader from "../../components/pageHeader/PageHeader"
import { Tabs } from 'antd'
import { items } from '.'

const AddFriend = () => {

    const headerProps = {
        renderGoBack: true,
        title: "Add Friend",
        subtitle: "",
        className: "add-friend-header"
    }

    return (
        <>
            <div className="add-friend-container">
                <div className="add-friend-header">
                    <PageHeader
                        {...headerProps}
                    ></PageHeader>
                </div>

                <div className='table-filters'>
                    <Tabs defaultActiveKey="users" items={items} />
                </div>
            </div>
        </>
    )
}

export default AddFriend