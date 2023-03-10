import { NextRequest, NextResponse } from 'next/server'

// Models
import * as ModelsMembers from '../../../models/members'

export async function GET(_: NextRequest) {

  const memberList = await ModelsMembers.getMembersList()

  return NextResponse.json({ data: memberList })
}