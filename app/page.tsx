import MemberList from '@/components/list/MemberList'
import * as ModelMember from '@/models/members'

const HomePage = async () => {

  const memberList = await ModelMember.getMembersList()

  return (
    <div>
      <MemberList
        memberList={memberList}
      />
    </div>
  )
}

export default HomePage