# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true, index: true　|
|email|integer|null: false, unique: true, index: true　|
|groups|integer|foreign_key: true|


- belongs_to :nickname
- belongs_to :email
- has_many: groups_id, through::  groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false, |
|user_id｜integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true｜
|time|datetime|

- belongs_to :text
- belongs_to:user_id
- belongs_to:group_id
- has_many: users,through::  groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_name|string|null: false, foreign_key: true|

- has_many: user_id
- has_many: group_name

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
