# README



# データベース

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|


### Association
- has_many :tasks


## tasksテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|start_at|datetime|null: false|
|finish_at|datetime|null: false|


### Association
- belongs_to :user
