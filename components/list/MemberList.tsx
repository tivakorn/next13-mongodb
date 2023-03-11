'use client'

import { Card, Text } from '@nextui-org/react'

const MemberList = ({ memberList }: { memberList: any[] }) => {

    const render = () => {

        if (!memberList.length) return

        return memberList.map((item, key) => {

            return (
                <Card key={key} css={{ mw: '400px' }}>
                    <Card.Body>
                        <Text>{item.name || ''}</Text>
                    </Card.Body>
                </Card>
            )
        })
    }
    
    return (
        <>
            {
                render()
            }
        </>
    )
}

export default MemberList