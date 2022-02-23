/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
 */
// import jsonp from 'jsonp'
// import { message } from 'antd'
import ajax from './ajax';

// const BASE = 'http://localhost:5000'
const BASE = '';

/**
 * 登录注册相关
 */
//#region
// 登陆
export const reqLogin= (username, password, role_id) => ajax(BASE + '/login', {username, password, role_id}, 'POST');

// 注册学校管理员,schooladmin为包含管理员信息的对象
export const reqRegisterSchoolAdmin = (schooladmin) => ajax(BASE + '/schooladmin_register', schooladmin, 'POST');

// 获取当前登录的学校管理员/系统管理员管信息
export const reqLoginAdmin = (username, role_id) => ajax(BASE + '/get_current_login_admin', {username, role_id});

// 更新学校管理员/系统管理员密码
export const reqUpdatePassword = (username, password, role_id) => ajax(BASE + '/update_admin_password', {username,password,role_id}, 'POST');
//#endregion

/**
 * 首页相关
 */
// 获取所有用户、学校、管理员。。。数量的列表
export const reqWelcomeInfo = () => ajax(BASE + '/welcome');

// 获取所有角色的列表
export const reqSystemAnnouncements = () => ajax(BASE + '/system_announcement');

/**
 * 学校相关
 */
//#region 
// 添加学校
export const reqAddSchool = (schoolObj) => ajax(BASE + '/manage/school/add', schoolObj, 'POST');

// 更新学校信息
export const reqUpdateSchool = ({schoolObj, schoolId}) => ajax(BASE + '/manage/school/update', {schoolObj, schoolId}, 'POST');

// 删除学校信息
export const reqDeleteSchool = (schoolId) => ajax(BASE + '/manage/school/delete', {schoolId}, 'POST');

/*
 搜索学校分页列表 (根据学校名称/学校所属区域)
 searchType: 搜索的类型, 
 keyword: 搜索关键字
 */
export const reqSearchSchools = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/school/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 获取学校列表
export const reqSchools = (pageNum, pageSize) => ajax(BASE + '/manage/school/list', {pageNum, pageSize});

//#endregion

/**
 * 公告相关
 */
//#region 
// 添加公告
export const reqAddAnnouncement = (announcementObj) => ajax(BASE + '/manage/announcement/add', announcementObj, 'POST');

// 删除公告
export const reqDeleteAnnouncement = (announcementId) => ajax(BASE + '/manage/announcement/delete', {announcementId}, 'POST');

// 获取学校列表
export const reqAnnouncements = (pageNum, pageSize) => ajax(BASE + '/manage/announcement/list', {pageNum, pageSize});

// // 更新分类
// export const reqUpdateCategory = ({categoryId, categoryName}) => ajax(BASE + '/manage/category/update', {categoryId, categoryName}, 'POST')

export const reqSearchAnnouncements = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/announcement/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新公告信息
export const reqUpdateAnnouncement = ({announcementObj, announcementId}) => ajax(BASE + '/manage/announcement/update', {announcementObj, announcementId}, 'POST');
//#endregion

/**
 * 新闻相关
 */
//#region 
// 添加新闻
export const reqAddNews = (newsObj) => ajax(BASE + '/manage/news/add', newsObj, 'POST');

// 删除新闻
export const reqDeleteNews = (newsId) => ajax(BASE + '/manage/news/delete', {newsId}, 'POST');

// 获取新闻列表
export const reqNews = (pageNum, pageSize) => ajax(BASE + '/manage/news/list', {pageNum, pageSize});

// 查询新闻列表
export const reqSearchNews = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/news/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新新闻信息
export const reqUpdateNews = ({newsObj, newsId}) => ajax(BASE + '/manage/news/update', {newsObj, newsId}, 'POST');
//#endregion

/**
 * 动态分享相关
 */
//#region 
// 添加动态分享
export const reqAddDynamicSharing = (dynamic_sharingObj) => ajax(BASE + '/manage/dynamic_sharing/add', dynamic_sharingObj, 'POST');

// 删除动态分享
export const reqDeleteDynamicSharing = (dynamic_sharingId) => ajax(BASE + '/manage/dynamic_sharing/delete', {dynamic_sharingId}, 'POST');

// 获取动态分享列表
export const reqDynamicSharings = (pageNum, pageSize) => ajax(BASE + '/manage/dynamic_sharing/list', {pageNum, pageSize});

// 查询动态分享列表
export const reqSearchDynamicSharings = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/dynamic_sharing/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新动态分享信息
export const reqUpdateDynamicSharing = ({dynamic_sharingObj, dynamic_sharingId}) => ajax(BASE + '/manage/dynamic_sharing/update', {dynamic_sharingObj, dynamic_sharingId}, 'POST');

// ** 添加评论 **
export const reqAddCommentDynamicSharing = (commentObj) => ajax(BASE + '/manage/dynamic_sharing/add_comment', commentObj, 'POST');

// 删除评论
export const reqDeleteDynamicSharingComment = (commentId) => ajax(BASE + '/manage/dynamic_sharing/delete', {commentId}, 'POST');

// 更新评论信息
export const reqUpdateDynamicSharingComment = ({commentObj, commentId}) => ajax(BASE + '/manage/dynamic_sharing/update', {commentObj, commentId}, 'POST');

//#endregion

/**
 * 意见建议相关
 */
//#region 
// 添加意见建议
export const reqAddOpinionsSuggestions = (opinions_suggestionsObj) => ajax(BASE + '/manage/opinions_suggestions/add', opinions_suggestionsObj, 'POST');

// 删除意见建议
export const reqDeleteOpinionsSuggestions = (opinions_suggestionsId) => ajax(BASE + '/manage/opinions_suggestions/delete', {opinions_suggestionsId}, 'POST');

// 获取意见建议列表
export const reqOpinionsSuggestions = (pageNum, pageSize) => ajax(BASE + '/manage/opinions_suggestions/list', {pageNum, pageSize});

// 查询意见建议列表
export const reqSearchOpinionsSuggestions = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/opinions_suggestions/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新意见建议信息
export const reqUpdateOpinionsSuggestions = ({opinions_suggestionsObj, opinions_suggestionsId}) => ajax(BASE + '/manage/opinions_suggestions/update', {opinions_suggestionsObj, opinions_suggestionsId}, 'POST');
//#endregion

/**
 * 预约信息相关
 */
//#region 
// 添加预约信息
export const reqAddReservationInfo = (reservation_infoObj) => ajax(BASE + '/manage/reservation_info/add', reservation_infoObj, 'POST');

// 删除预约信息
export const reqDeleteReservationInfo = (reservation_infoId) => ajax(BASE + '/manage/reservation_info/delete', {reservation_infoId}, 'POST');

// 获取预约信息列表
export const reqReservationInfo = (pageNum, pageSize) => ajax(BASE + '/manage/reservation_info/list', {pageNum, pageSize});

// 查询预约信息列表
export const reqSearchReservationInfo = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/reservation_info/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新预约信息
export const reqUpdateReservationInfo = ({reservation_infoObj, reservation_infoId}) => ajax(BASE + '/manage/reservation_info/update', {reservation_infoObj, reservation_infoId}, 'POST');
//#endregion

/**
 * 用户相关
 */
//#region 
// 添加用户
export const reqAddUser = (userObj) => ajax(BASE + '/manage/user/add', userObj, 'POST');

// 删除用户
export const reqDeleteUser = (userId) => ajax(BASE + '/manage/user/delete', {userId}, 'POST');

// 获取用户列表
export const reqUser = (pageNum, pageSize) => ajax(BASE + '/manage/user/list', {pageNum, pageSize});

// 查询用户列表
export const reqSearchUser = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/user/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新用户
export const reqUpdateUser = ({userObj, userId}) => ajax(BASE + '/manage/user/update', {userObj, userId}, 'POST');
//#endregion

/**
 * 学校管理员相关
 */
//#region 
// 添加学校管理员
export const reqAddSchoolAdmin = (school_adminObj) => ajax(BASE + '/manage/school_admin/add', school_adminObj, 'POST');

// 删除学校管理员
export const reqDeleteSchoolAdmin = (school_adminId) => ajax(BASE + '/manage/school_admin/delete', {school_adminId}, 'POST');

// 获取学校管理员列表
export const reqSchoolAdmin = (pageNum, pageSize) => ajax(BASE + '/manage/school_admin/list', {pageNum, pageSize});

// 查询学校管理员列表
export const reqSearchSchoolAdmin = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/school_admin/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新学校管理员
export const reqUpdateSchoolAdmin = ({school_adminObj, school_adminId}) => ajax(BASE + '/manage/school_admin/update', {school_adminObj, school_adminId}, 'POST');
//#endregion

/**
 * 系统管理员相关
 */
//#region 
// 添加用户
export const reqAddSystemAdmin = (system_adminObj) => ajax(BASE + '/manage/system_admin/add', system_adminObj, 'POST');

// 删除用户
export const reqDeleteSystemAdmin = (system_adminId) => ajax(BASE + '/manage/system_admin/delete', {system_adminId}, 'POST');

// 获取用户列表
export const reqSystemAdmin = (pageNum, pageSize) => ajax(BASE + '/manage/system_admin/list', {pageNum, pageSize});

// 查询用户列表
export const reqSearchSystemAdmin = ({pageNum, pageSize, keyword, searchType}) => ajax(BASE + '/manage/system_admin/search', {
  pageNum,
  pageSize,
  [searchType]: keyword,
});

// 更新用户
export const reqUpdateSystemAdmin = ({system_adminObj, system_adminId, password}) => ajax(BASE + '/manage/system_admin/update', {system_adminObj, system_adminId, password}, 'POST');
//#endregion

/**
 * 权限管理相关
 */
//#region 
// 获取所有角色的列表
export const reqSystemAdminRoles = () => ajax(BASE + '/manage/role/system_admin/list');

// 更新角色
export const reqUpdateSystemAdminRole = (role) => ajax(BASE + '/manage/role/system_admin/update', role, 'POST');

// 获取所有角色的列表
export const reqSchoolAdminRoles = () => ajax(BASE + '/manage/role/school_admin/list');

// 更新角色
export const reqUpdateSchoolAdminRole = (role) => ajax(BASE + '/manage/role/school_admin/update', role, 'POST');
//#endregion

// 删除指定名称的图片
export const reqDeleteImg = (name) => ajax(BASE + '/manage/img/delete', {name}, 'POST');

// 通过学校管理员姓名 查询所在学校
export const reqSchoolByRealname = (realname) => ajax(BASE + '/manage/school_info_by_username', {realname}, 'POST');
