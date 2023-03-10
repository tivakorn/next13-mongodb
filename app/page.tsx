// Models
import * as ModelsMembers from '../models/members'

const HomePage = async () => {

  const members = await ModelsMembers.getMembersList()

  const renderMemberList = () => {

    return members.map((item, key) => {

      return (
        <h1 key={key}>{item.name}</h1>
      )
    })
  }
  return (
    <div>
      {renderMemberList()}
    </div>
  )
}

export default HomePage