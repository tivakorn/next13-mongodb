import * as ModelMember from '../models/members'

const HomePage = async () => {

  const memberList = await ModelMember.getMembersList()

  return (
    <div>
      {
        memberList.map((item, key) => (<h3 key={key}>{item.name || ''}</h3>))
      }
    </div>
  )
}

export default HomePage