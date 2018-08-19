export class UserDashBoard {
    countFamily: number;
    countGroup: number;
    countVisiter: number;
    countStaff: number;
    noticeCount: number;
    discussionCount: number;
    blockCount: number;
    flatCount: number;
    totalUsers: number;
    activeUsers: number;
    committeMembers: number;
    unitStaffCount: number;
    staffCount: number;

    constructor(
        countFamily: number, countGroup: number, countVisiter: number, countStaff: number, noticeCount: number,
        discussionCount: number, blockcount: number, flatCount: number, totalUsers: number, activeUsers: number,
        committeMember: number, unitStaffCount: number, staffCount: number
    ) {
        this.countFamily = countFamily;
        this.countGroup = countGroup;
        this.countVisiter = countVisiter;
        this.countStaff = countStaff;
        this.noticeCount = noticeCount;
        this.discussionCount = discussionCount;
        this.blockCount = blockcount;
        this.flatCount = flatCount;
        this.totalUsers = totalUsers;
        this.activeUsers = activeUsers;
        this.committeMembers = committeMember;
        this.unitStaffCount = unitStaffCount;
        this.staffCount = staffCount;
    }

}