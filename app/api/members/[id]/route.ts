import { NextRequest, NextResponse } from 'next/server'

// Models
import * as ModelsMembers from '../../../../models/members'

export async function GET(_: NextRequest, { params }: any) {

  const memberId = params.id

  const member = await ModelsMembers.getMembers(memberId)

  return NextResponse.json({ data: member })
}